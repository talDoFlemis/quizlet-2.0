import Image from "next/image"
import { userGithubData } from "typings"
import GithubIcon from "@svgs/socialMedia/github.svg"
import GlobeIcon from "@svgs/socialMedia/globe.svg"

function Projects({ userInfo }: { userInfo: userGithubData }) {
  const sortedProjects = userInfo.repositories.nodes.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  })

  return (
    <div className="flex w-full flex-col space-y-8">
      <h1 className="text-3xl font-bold text-[#24292f]">My Projects</h1>
      <div className="grid grid-cols-1 place-content-center place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((repo) => (
          <a
            href={repo.homepageUrl ? repo.homepageUrl : repo.url}
            key={repo.id}
            className="group h-56 w-full overflow-hidden rounded-md bg-white shadow-md transition-transform hover:scale-110 hover:cursor-pointer hover:shadow-lg sm:h-40"
          >
            <div className="relative my-auto h-full w-full">
              <Image
                src={`https://raw.githubusercontent.com/talDoFlemis/${repo.name}/main/.github/home.png`}
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 z-50 flex w-full items-center justify-between bg-white px-2 py-1">
                <p className="text-center">{repo.name}</p>
                <div className="flex space-x-2">
                  <a href={repo.url}>
                    <GithubIcon className="h-4 w-4 hover:text-[#4255ff]" />
                  </a>
                  {repo.homepageUrl && (
                    <a href={repo.homepageUrl}>
                      <GlobeIcon className="h-4 w-4 hover:text-[#4255ff]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
