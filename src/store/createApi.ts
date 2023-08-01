const transportHttp = (url: string) => (structure: { [key: string]: { [key: string]: string[] } }) => {
  let callId = 1;
  const api: { [key: string]: { [key: string]: (...args: any[]) => Promise<any> } } = {};
  const services = Object.keys(structure);

  for (const name of services) {
    api[name] = {};
    const service = structure[name];
    const methods = Object.keys(service);

    for (const methodName of methods) {
      api[name][methodName] = (...values: any[]) =>
        new Promise((resolve, reject) => {
          const id = callId++;
          const entries = structure[name][methodName].map((key, index) => {
            return [key, values[index]];
          });
          const args = Object.fromEntries(entries);
          const method = name + '/' + methodName;
          const packet = { type: 'call', id, method, args };

          fetch(url + '/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(packet),
          }).then((res) => {
            if (res.status === 200) resolve(res.json());
            else reject(new Error(`Status Code: ${res.status}`));
          });
        });
    }
  }

  return Promise.resolve(api);
};

export const createApi = async () => {
  const api = await transportHttp('http://localhost:8003')({
    aircraft: {
      getAircraft: ['code'],
      getAllAircrafts: [],
    },
  });

  return api;
};
