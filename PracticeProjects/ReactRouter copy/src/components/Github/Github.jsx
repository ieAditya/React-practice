import { useLoaderData } from "react-router"

function Github() {
    const gitHubInfo = useLoaderData()
    return (
        <div className="flex m-8 bg-gray-200">
            <img src={gitHubInfo.avatar_url} alt="Github profile picture" className="inline p-4" width={300}/>
            <div className="p-4">
                <h1 className="">Name:</h1>
                <h1 className="">Bio:</h1>
                <h1 className="">Followers:</h1>
                <h1 className="">Following:</h1>
                <h1 className="">Repositories:</h1>
            </div>
            <div className="p-4">
                <h1 className="">{gitHubInfo.name}</h1>
                <h1 className="">{gitHubInfo.bio}</h1>
                <h1 className="">{gitHubInfo.followers}</h1>
                <h1 className="">{gitHubInfo.following}</h1>
                <h1 className="">{gitHubInfo.public_repos}</h1>
            </div>
        </div>
    )
}

export default Github