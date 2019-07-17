import cookies from 'browser-cookies';

class Config {

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