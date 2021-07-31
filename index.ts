
export interface AxiosConfig { // request 설정
    headers?: {
        [key: string]: string;
    },
    withCredentials?: boolean;
}

export interface AxiosData { // request에 넣는 데이터 => 객체
    [key: string]: any;
}

export interface AxiosResult { // request에 대한 응답(response)
    data: any;
    status: number;
    statusText: string;
}

function isAxiosData(data: any): data is AxiosData { // 리턴값 타입 : data is AxiosData(객체인지 아닌지)
    if(data === null) return false;
    if(data instanceof FormData) return false;
    return typeof data === 'object';
}

export interface Axios {
    defaults: {
        baseUrl: string;
        headers: {
            [key: string]: string;
        }
    }
    get(url: string, config?: AxiosConfig): Promise<AxiosResult>;
    put(url: string, data?: string | AxiosData | FormData, config?: AxiosConfig): Promise<AxiosResult>;
    patch(url: string, data?: string | AxiosData | FormData, config?: AxiosConfig): Promise<AxiosResult>;
    post(url: string, data?: string | AxiosData | FormData, config?: AxiosConfig): Promise<AxiosResult>;
    delete(url: string, config?: AxiosConfig): Promise<AxiosResult>;
    options(url: string, config?: AxiosConfig): Promise<AxiosResult>;
    head(url: string, config?: AxiosConfig): Promise<AxiosResult>;
}

const axios: Axios = {
    defaults: {
        baseUrl: '',
        headers: {},
    },
    get(url, config) {
        return new Promise((resolve, reject) => { // Promise
            const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성
            xhr.onload = function() { // 브라우저가 서버로부터 응답을 받을 때 발생하는 이벤트
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function() {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('GET', axios.defaults.baseUrl + url); // http 메서드, 요청 처리할 페이지의 url, 요청이 비동기로 처리될 것인지에 대한 boolean 값
            const headers = { ...axios.defaults.headers, ...config?.headers }; // defaults.headers를 적용하고 직접 적용한 config.headers 적용
            Object.keys(headers).map((key) => {
                xhr.setRequestHeader(key, headers[key]);
            })
            xhr.withCredentials = config?.withCredentials || false;
            xhr.send(); // 전송
        })
        
    },
    put(url, data, config) {
        return new Promise((resolve, reject) => { // Promise
            const xhr = new XMLHttpRequest(); 
            xhr.onload = function() { 
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function() {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('PUT', axios.defaults.baseUrl + url); 
            const headers = { ...axios.defaults.headers, ...config?.headers };
            Object.keys(headers).map((key) => {
                xhr.setRequestHeader(key, headers[key]);
            })
            xhr.withCredentials = config?.withCredentials || false;
            if(isAxiosData(data)) { // 객체면
                xhr.send(JSON.stringify(data));
            }else {
                xhr.send(data);
            }
             
        })
    },
    patch(url, data, config) {
        return new Promise((resolve, reject) => { // Promise
            const xhr = new XMLHttpRequest(); 
            xhr.onload = function() { 
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function() {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('PATCH', axios.defaults.baseUrl + url); 
            const headers = { ...axios.defaults.headers, ...config?.headers };
            Object.keys(headers).map((key) => {
                xhr.setRequestHeader(key, headers[key]);
            })
            xhr.withCredentials = config?.withCredentials || false;
            if(isAxiosData(data)) { // 객체면
                xhr.send(JSON.stringify(data));
            }else {
                xhr.send(data);
            }
             
        })
    },
    post(url, data, config) {
        return new Promise((resolve, reject) => { // Promise
            const xhr = new XMLHttpRequest(); 
            xhr.onload = function() { 
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function() {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('POST', axios.defaults.baseUrl + url); 
            const headers = { ...axios.defaults.headers, ...config?.headers };
            Object.keys(headers).map((key) => {
                xhr.setRequestHeader(key, headers[key]);
            })
            xhr.withCredentials = config?.withCredentials || false;
            if(isAxiosData(data)) { // 객체면
                xhr.send(JSON.stringify(data));
            }else {
                xhr.send(data);
            }
             
        })
    },
    delete(url, config) {
        return new Promise((resolve, reject) => { // Promise
            const xhr = new XMLHttpRequest(); 
            xhr.onload = function() { 
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function() {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('DELETE', axios.defaults.baseUrl + url); 
            const headers = { ...axios.defaults.headers, ...config?.headers };
            Object.keys(headers).map((key) => {
                xhr.setRequestHeader(key, headers[key]);
            })
            xhr.withCredentials = config?.withCredentials || false;
            xhr.send();
             
        })
    },
    options(url, config) {
        return new Promise((resolve, reject) => { // Promise
            const xhr = new XMLHttpRequest(); 
            xhr.onload = function() { 
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function() {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('OPTIONS', axios.defaults.baseUrl + url); 
            const headers = { ...axios.defaults.headers, ...config?.headers };
            Object.keys(headers).map((key) => {
                xhr.setRequestHeader(key, headers[key]);
            })
            xhr.withCredentials = config?.withCredentials || false;
            xhr.send();
             
        })
    },
    head(url, config) {
        return new Promise((resolve, reject) => { // Promise
            const xhr = new XMLHttpRequest(); 
            xhr.onload = function() { 
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText});
                }else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function() {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText});
            };
            xhr.open('HEAD', axios.defaults.baseUrl + url); 
            const headers = { ...axios.defaults.headers, ...config?.headers };
            Object.keys(headers).map((key) => {
                xhr.setRequestHeader(key, headers[key]);
            })
            xhr.withCredentials = config?.withCredentials || false;
            xhr.send();
             
        })
    },
};

export default axios;