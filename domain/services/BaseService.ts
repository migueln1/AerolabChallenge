
export class BaseService<T>{
    protected async getAll(endpoint: string, headers?: [string, string][] | undefined): Promise<T[]> {
        const reqHeaders = new Headers();
        reqHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`);
        if(headers && headers.length > 0){
            for (let i = 0; i < headers.length; i++) {
                reqHeaders.append(headers[i][0],headers[i][1])
            }
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,{
            method:'GET',
            headers: reqHeaders
        })
        return response.json()
    }

    async getEntity(endpoint: string, headers?: [string, string][]) : Promise<T> {
        const reqHeaders = new Headers();
        reqHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`);
        if(headers && headers.length > 0){
            for (let i = 0; i < headers.length; i++) {
                reqHeaders.append(headers[i][0],headers[i][1])
            }
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,{
            method:'GET',
            headers: reqHeaders
        })
        const entity: T = await response.json()
        return new Promise((resolve, reject) => {
            resolve(entity)
        });
    }
}