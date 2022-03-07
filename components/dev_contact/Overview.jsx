import React from "react"
import cl from "clsx"
import { Line } from "rc-progress"
import Image from "next/image"
import Head from "next/head"

function Overview({ userInfo }) {
  let repoNodes = userInfo.repositories.nodes

  repoNodes = repoNodes
    .filter((node) => {
      return node?.languages?.edges.length > 0
    })
    // flatten the list of language nodes
    .reduce((acc, curr) => curr.languages.edges.concat(acc), [])
    .reduce((acc, prev) => {
      let langSize = prev.size

      if (acc[prev.node.name] && prev.node.name === acc[prev.node.name].name) {
        langSize = prev.size + acc[prev.node.name].size
      }
      return {
        ...acc,
        [prev.node.name]: {
          name: prev.node.name,
          color: prev.node.color,
          size: langSize,
        },
      }
    }, {})

  const topLangs = Object.keys(repoNodes)
    .sort((a, b) => repoNodes[a].size - repoNodes[b].size)
    .reduce((result, key) => {
      result[key] = repoNodes[key]
      return result
    }, {})

  let langs = Object.values(topLangs)

  langs = langs
    .sort((a, b) => b.size - a.size)
    .filter((lang) => {
      return lang.name
    })

  const totalLanguageSize = langs.reduce((acc, curr) => acc + curr.size, 0)

  return (
    <div className="flex flex-col space-y-8">
      <Head>
        <title>Developer Contact</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold text-[#24292f]">About Me</h1>
        <p className="mt-3 text-lg">{userInfo.bio}</p>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-[#24292f]">Stats</h1>
        <div className="mt-4 grid md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-2xl font-bold text-[#24292f]">
              Languages
            </h1>
            {langs.map((lang, index) => (
              <div
                key={lang.name}
                className={cl(
                  index > 3 && "hidden",
                  "transition-transform hover:scale-105"
                )}
              >
                <h1>{lang.name}</h1>

                <div className="mb-4 grid grid-cols-5 gap-4 ">
                  <Line
                    percent={(lang.size / totalLanguageSize) * 100}
                    strokeWidth="4"
                    strokeColor={lang.color}
                    trailWidth="4"
                    className="col-span-4 h-full w-full"
                  />
                  <p>{(lang.size / totalLanguageSize).toFixed(2) * 100}%</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4 md:mt-0">
            <h1 className="text-2xl font-bold text-[#24292f]">Frameworks</h1>
            <div className="flex items-center space-x-6 transition-transform hover:scale-105">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                priority
                alt=""
                height={40}
                width={40}
              />
              <h1 className="text-lg font-bold">NextJS</h1>
            </div>
            <div className="flex items-center space-x-6 transition-transform hover:scale-105">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                priority
                alt=""
                height={40}
                width={40}
              />
              <h1 className="text-lg font-bold">React</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
