import { useParams, Link } from "react-router-dom";
import { GetProjectsDetailData } from "../lib/GetProjectsDetailData";
import { GetProjectsDetailTopImage } from "../lib/GetProjectsDetailTopImage";
import { GetArchitectureImage } from "../lib/GetArchitectureImage";
import { GetBackgroundImage } from "../lib/GetBackgroundImage";
import { GetContentImage } from "../lib/GetContentImage";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export function ProjectsDetail() {
    const [projectsData, setProjectsData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const projectsData = await GetProjectsDetailData(id);
            setProjectsData(projectsData);
        }
        fetchData();
    }, []);

    return (
        <>
            <div>
                <h1>OutLine</h1>
                {projectsData.map((data) => {
                    const appImage =  GetProjectsDetailTopImage(data);
                    const backgroundImage = GetBackgroundImage(data);
                    const content1 = GetContentImage(data);
                    const architectureImage = GetArchitectureImage(data);
                    return (
                        <div key={data.id}>
                            <img src={appImage} alt={data.title} width={200} />
                            <h2>タイトル</h2>
                            <p>{data.title}</p>
                            <h2>どんなアプリか</h2>
                            <p>{data.outline}</p>
                            <h2>アプリ制作背景</h2>
                            <img src={backgroundImage} ale={data.title} width={200} />
                            <h2>アプリ内容</h2>
                            <img src={content1} alt={data.title} height={800} />
                            <h2>技術スタック</h2>
                            <p>{data.technology}</p>
                            <h2>Architecture図</h2>
                            <img src={architectureImage} alt={data.title} width={200}/>
                            <h2>こだわりの部分</h2>
                            <p>{data.stick}</p>
                            <h2>今後の展開</h2>
                            <p>{data.next_step}</p>
                            <h2>アプリURL</h2>
                            <a
                                href={data.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary text-blue-500 hover:underline"
                            >アプリURL</a>
                            <h2>アプリ記事</h2>
                            <a
                                href={data.article_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary text-blue-500 hover:underline"
                            >アプリ記事
                            </a>
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