import cookies from 'browser-cookies';

class Config {

    clearToken() {
        localStorage.removeItem('token');
        return cookies.erase('ac_token', {domain: process.env.SUB_DOMAIN});
    }

    storeToken(token) {
        return cookies.set('ac_token', token, {
            domain : process.env.SUB_DOMAIN,
            expires: 30
        });
    }

    clearProfile() {
        localStorage.removeItem('profile');
        return cookies.erase('profile', {domain: process.env.SUB_DOMAIN});
    }
    
    storeProfile(profile) {
        return cookies.set('profile', jwt.encode(profile, process.env.APP_KEY), {
            domain : process.env.SUB_DOMAIN,
            expires: 30
        });
    }


    getToken() {
        if (!cookies.get('token') && localStorage.getItem('token')) {
            this.storeToken(localStorage.getItem('token'));
            localStorage.removeItem('token');
        }
        return cookies.get('ac_token');
    }


    getProfile() {
        if (!this.getToken()) {
            this.clearProfile();
            return {};
        }
        
        if (!cookies.get('profile') && localStorage.getItem('profile')) {
            try {
                const profile = jwt.decode(localStorage.getItem('profile'), process.env.APP_KEY);
                this.storeProfile(profile);
                localStorage.removeItem('profile');
                return profile;
            } catch (e) {
                this.clearProfile();
                return {};
            }
        }
        try {
            return jwt.decode(cookies.get('profile'), process.env.APP_KEY);
        } catch (e) {
            this.clearProfile();
            return {};
        }
    }
}


module.exports = Config;