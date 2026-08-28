import { useParams, Link } from "react-router-dom";
import { GetProjectsDetailData } from "../lib/GetProjectsDetailData";
import { GetProjectsDetailTopImage } from "../lib/GetProjectsDetailTopImage";
import { GetProjectsDetailScreenData } from "../lib/GetProjectsDetailScreenData";
import { GetBackgroundImage } from "../lib/GetBackgroundImage";
import { GetContentImage } from "../lib/GetContentImage";
import { useEffect, useState } from "react";

export function ProjectsDetail() {
    const [projectsData, setProjectsData] = useState([]);
    const [contentsData, setContentsData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const projectsData = await GetProjectsDetailData(id);
            const contentsScreenData = await GetProjectsDetailScreenData(id);
            setProjectsData(projectsData);
            setContentsData(contentsScreenData);
        }
        fetchData();
    }, []);

    return (
        <>
            <div>
                {projectsData.map((data) => {
                    const appImage =  GetProjectsDetailTopImage(data);
                    const backgroundImage = GetBackgroundImage(data);
                    return (
                        <div key={data.id}>
                            <img
                            src={appImage}
                            alt={data.title}
                            className="w-full max-w-3xl mx-auto rounded-2xl object-cover"
                            />
                            <h2 className="text-2xl font-bold mt-12 mb-4 border-t border-gray-300 pt-12">タイトル</h2>
                            <p>{data.title}</p>
                            <h2 className="text-2xl font-bold mt-12 mb-4">どんなアプリか</h2>
                            <p>{data.outline}</p>
                            <h2 className="text-2xl font-bold mt-12 mb-4">なぜ作ったか</h2>
                            <p>{data.why}</p>
                            <h2 className="text-2xl font-bold mt-12 mb-4">アプリ制作背景</h2>
                            <p className="whitespace-pre-line leading-7">
                                {data.background}
                            </p>
                            <div className="border-t border-gray-300 mt-12 pt-12">
                                <h2 className="text-2xl font-bold mt-12 mb-4">アプリ内容</h2>
                                {contentsData.map((content) => {
                                    const contentImage = GetContentImage(content);
                                    return (
                                        <>
                                            <div key={content.id} className="mt-8">
                                                <h3 className="text-xl font-semibold mb-4">
                                                    {content.title}
                                                </h3>

                                                <img
                                                    src={contentImage}
                                                    alt={content.title}
                                                    className="w-full max-w-3xl mx-auto rounded-xl"
                                                />

                                                <p className="whitespace-pre-line mt-4 leading-7">
                                                    {content.content}
                                                </p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <h2 className="text-2xl font-bold mt-12 mb-4">技術スタック</h2>
                            <p>{data.technology}</p>
                            <h2 className="text-2xl font-bold mt-12 mb-4">Architecture図</h2>
                            <img
                            src={backgroundImage[0].data.publicUrl}
                            alt="Architecture図"
                            className="w-full max-w-3xl mx-auto object-contain"
                            />
                            {backgroundImage[1] && (
                                <>
                                    <h2>TBL設計</h2>
                                    <img
                                    src={backgroundImage[1].data.publicUrl}
                                    alt="Architecture図"
                                    className="w-full max-w-3xl mx-auto object-contain"
                                    />
                                </>
                            )
                            }
                            <h2 className="text-2xl font-bold mt-12 mb-4">こだわりの部分</h2>
                            <p className="whitespace-pre-line">{data.stick}</p>
                            <h2 className="text-2xl font-bold mt-12 mb-4">今後の展開</h2>
                            <p className="whitespace-pre-line">{data.next_step}</p>
                            <div className="border-t border-gray-300 mt-12 pt-12">
                                <h2 className="text-2xl font-bold mt-12 mb-4">アプリURL</h2>
                                <a
                                    href={data.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary text-blue-500 hover:underline"
                                >アプリURL</a>
                                <h2 className="text-2xl font-bold mt-12 mb-4">アプリ記事</h2>
                                <a
                                    href={data.article_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary text-blue-500 hover:underline"
                                >アプリ記事
                                </a>
                            </div>
                        </div>

                    )
                })}
            </div>
            <Link to="/" className="text-blue-500 hover:underline">
                戻る
            </Link>
        </>
    );
}