class Github {
    constructor() {
        this.client_id = '09650e7f69d2e5383719';
        this.client_secret = '93212e3e5062dbbcf71f27e0b3a26a6400c644de';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        }
    }
}




const github = new Github;

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== '') {
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {

                } else {

                }
            });
    } else {

    }
});