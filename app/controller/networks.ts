import FacebookProvider from "./social/facebook";
import InstagramProvider from "./social/instagram";
import TwitterProvider from "./social/twitter";
import Network from "./social/network";

let social_networks: Network[] | null;
class SocialProvider {
    protected providers : Network[] | null = null;

    constructor() {
        this.providers = [
            this.init(new FacebookProvider()),
            this.init(new InstagramProvider()),
            this.init(new TwitterProvider())
        ];
    }

    init(provider : Network) {
        return provider.init();
    }

    getProviders() { return this.providers; }
}

export default function getProviders() {
    if (!social_networks) {
        social_networks = new SocialProvider().getProviders();
    }
    
    return social_networks;
}


