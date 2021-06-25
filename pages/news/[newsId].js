//our-dimain/news
import {useRouter} from "next/router"
const NewsPage = ()=>{
    const router = useRouter();
    const urlValue= router.query.newsId;
    return<h1>Something important {urlValue} </h1>
}
export default NewsPage;