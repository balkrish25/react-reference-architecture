export const HttpServices = {
    create(baseURL) {
        return {
            baseURL,
            async request(url, options) {
                const apiURL = this.baseURL + url;
                const response = await fetch(apiURL, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return await response.json();
            },

            get(url) {
                return this.request(url, { method: 'GET' });
            },

            post(url, data) {
                return this.request(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            },

            put(url, data) {
                return this.request(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            },

            delete(url) {
                return this.request(url, { method: 'DELETE' });
            },
        };
    },
};