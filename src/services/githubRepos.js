import Api from "../api/Api";

const githubRepos = async(language) => {
	let url = 'https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories'
	let getGitHubRepos = await Api(url)
	return getGitHubRepos
}

export default githubRepos