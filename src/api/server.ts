let token = `e7fc377f2d2dcad80df02c71ae41cff08ea54bebdcd37c47`

export const server_calls = {

    get: async () => {
        const response = await fetch(`https://mewing-flossy-attempt.glitch.me/api/memes`, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://mewing-flossy-attempt.glitch.me/api/memes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://mewing-flossy-attempt.glitch.me/api/memes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://mewing-flossy-attempt.glitch.me/api/memes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}