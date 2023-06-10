import React, {useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)

    

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39e520d0b284431888430fae818e964a&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(()=>{
        updateNews();
    },[])

    // const handlePrevClick = async () => {
    //     setPage(page - 1)
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1)
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39e520d0b284431888430fae818e964a&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

        return (
            <>
                <h2 className='text-center' style={{ margin: '40px 0px',marginTop:'90px' }}>NewsDaily-Top Headlines</h2>
                {loading && <Loading/>}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loading />}
                >
                    <div className="container">

                        <div className="row mt-3 ">
                            {articles.map((element) => {
                                return <div key={element.url} className="col-md-4 col-12">
                                    <Newsitem title={element.title ? element.title : " "} description={element.description ? element.description : " "}
                                        imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between my-5">
                    <button disabled={page <= 1} className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
