import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner from '../Spinner'

export class News extends Component {
    constructor(){
        super()
        console.log("hello")
        this.state={
            articles: this.articles,
            loading:false,
            page: 1

        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=08f30b116fdf42b3bd702d8172371fc7&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        
        this.setState({article: parsedData.article, totalResults: parsedData.totalResults})
    }
    handleNextClick = async()=>{
        console.log("next");
        if (this.state.page +1 >Math.ceil((this.state.totalResults)/this.props.pageSize)){

        }
        else{
            
            let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=08f30b116fdf42b3bd702d8172371fc7&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles,
           
        })
    }
    }
    handlePrevClick = async()=>{
        console.log("next");
        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=08f30b116fdf42b3bd702d8172371fc7&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
        })
    }
   
    articles= [
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Chris Liakos, Christian Edwards",
        "title": "Santorini in state of emergency after strongest quake in days of tremors - CNN",
        "description": "A state of emergency has been declared in Santorini after the strongest earthquake was recorded in days of near-constant tremors, which have almost emptied the famous Greek tourist haven of visitors and residents.",
        "url": "https://www.cnn.com/2025/02/06/travel/santorini-greece-earthquake-strong-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-15136949a.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2025-02-06T14:18:00Z",
        "content": "A state of emergency has been declared in Santorini after the strongest earthquake was recorded in days of near-constant tremors, which have almost emptied the famous Greek tourist haven of visitors … [+1963 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Melissa Repko",
        "title": "After calling off merger, Coach parent Tapestry's holiday sales soar - CNBC",
        "description": "Coach's parent company reported the results less than two months after calling off its merger with fashion accessories competitor Capri.",
        "url": "https://www.cnbc.com/2025/02/06/tapestry-tpr-q2-2025-earnings.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/108065428-1732059497172-gettyimages-2185023925-AFP_36MV8QD.jpeg?v=1738845507&w=1920&h=1080",
        "publishedAt": "2025-02-06T13:49:38Z",
        "content": "Shares of Coach parent Tapestry shot up about 15% on Thursday after the company beat holiday-quarter sales expectations and boosted its full-year forecast.\r\nThe fashion and accessories company said i… [+4070 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Nick Bromberg",
        "title": "Lakers become the No. 4 favorite to win NBA Finals after trading for Mark Williams - Yahoo Sports",
        "description": "The Lakers have added Luka Dončić and Mark Williams over the past week. Is that enough for a title push?.",
        "url": "https://sports.yahoo.com/lakers-become-the-no-4-favorite-to-win-nba-finals-after-trading-for-mark-williams-134709670.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/rm8vK_wxpSj5jg_AkVLVTg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NTg-/https://s.yimg.com/os/creatr-uploaded-images/2025-02/bbbd8cc0-e490-11ef-aeff-0df5f46854f9",
        "publishedAt": "2025-02-06T13:47:09Z",
        "content": "The Los Angeles Lakers NBA Finals odds have improved again.\r\nThe Lakers are now the No. 4 favorite to win the Finals following their late-night move to add center Mark Williams from the Hornets. The … [+2252 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MarketWatch"
        },
        "author": "Jeffry Bartash",
        "title": "Jobless claims rise slightly, but no sign of trouble brewing in labor market - MarketWatch",
        "description": "Scarce layoffs keep unemployment filings low",
        "url": "https://www.marketwatch.com/story/jobless-claims-rise-slightly-but-no-sign-of-trouble-brewing-in-labor-market-e863b88f",
        "urlToImage": "https://images.mktw.net/im-68498318/social",
        "publishedAt": "2025-02-06T13:35:00Z",
        "content": "The number of people who applied for unemployment benefits in early February rose slightly but remained at very low levels in a sign the labor market is still quite healthy.\r\nNew jobless claims, a pr… [+174 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": null,
        "title": "Google Launches Gemini 2.0 for Everyone. Here Are the Highlights - CNET",
        "description": "The flood of AI news from Google comes in the wake of the launch of DeepSeek, the breakthrough Chinese AI tool that's been making headlines.",
        "url": "https://www.cnet.com/tech/services-and-software/google-launches-gemini-2-0-for-everyone-here-are-the-highlights/",
        "urlToImage": "https://www.cnet.com/a/img/resize/2c84865fa3fc25832a589f6821025e69c53e4812/hub/2025/02/06/b5cf8c98-5ff6-47b7-9962-4010dba6394b/google-gemini-gettyimages-2100329074.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2025-02-06T13:24:00Z",
        "content": "Google delivered big artificial intelligence news on Wednesday, launching its next-generation chatbot, Gemini 2.0. Google is opening up new Gemini 2.0 models in a multipronged initiative. \r\nLet's bre… [+2943 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Gabrielle Fonrouge",
        "title": "How Calvin Klein and Tommy Hilfiger got caught in Trump's trade war with China - CNBC",
        "description": "The owner of Calvin Klein and Tommy Hilfger has been placed on China's unreliable entities list, which could force it to cease operations in the region.",
        "url": "https://www.cnbc.com/2025/02/06/calvin-klein-owner-pvh-blacklisted-in-china.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/108098122-1738792639254-GettyImages-2176945116.jpg?v=1738792858&w=1920&h=1080",
        "publishedAt": "2025-02-06T13:13:22Z",
        "content": "China has blacklisted the owner of Calvin Klein and Tommy Hilfiger, which could force the company to shut down stores and manufacturing in an early repercussion of President Donald Trump's trade war.… [+5803 chars]"
      },
      {
        "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
        },
        "author": "Nicole Nguyen, Julie Jargon",
        "title": "These People Turned AirPods Into Hearing Aids. Here Are the Pros and Cons. - The Wall Street Journal",
        "description": "AirPods are better for amplifying conversation, if you can find the controls—and keep the buds from falling out.",
        "url": "https://www.wsj.com/tech/personal-tech/apple-airpod-hearing-aids-pros-cons-6871d52a",
        "urlToImage": "https://images.wsj.net/im-82916040/social",
        "publishedAt": "2025-02-06T13:00:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Syrian refugees killed in Swedish gunman's attack on school - BBC.com",
        "description": "Two Bosnian citizens were also caught up in the worst shooting in Swedish history.",
        "url": "https://www.bbc.com/news/articles/cy9l2424wrgo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/47f8/live/5dac6590-e484-11ef-a319-fb4e7360c4ec.jpg",
        "publishedAt": "2025-02-06T12:36:38Z",
        "content": "Joel Gunter &amp; Paul Kirby\r\nSyria's embassy to Stockholm says Syrians were among the 10 victims of a gunman who carried out the worst shooting in Swedish history, at a school in Orebro this week.\r\n… [+4431 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Lucas Lilieholm",
        "title": "Israel backs Trump plan and orders military to prepare for Palestinians to leave Gaza - CNN",
        "description": "Israeli Prime Minister Benjamin Netanyahu has backed US President Donald Trump’s proposal to “take over” Gaza, as Israel’s army was ordered to prepare plans for large numbers of Palestinians to leave the territory.",
        "url": "https://www.cnn.com/2025/02/06/middleeast/netanyahu-endorses-trump-gaza-plan-intl-hnk/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2025-02-04t215741z-2142442083-rc2xncafi7v7-rtrmadp-3-usa-israel.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2025-02-06T12:36:00Z",
        "content": "Israeli Prime Minister Benjamin Netanyahu has backed US President Donald Trumps proposal to take over Gaza, as Israels army was ordered to prepare plans for large numbers of Palestinians to leave the… [+6161 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "UK interest rates latest: Bank of England cuts interest rates to 4.5%, the lowest level since June 2023 - BBC.com",
        "description": "The Bank says the UK economy will grow by 0.75% in 2025, down from a previous forecast of 1.5%, while inflation is expected to rise.",
        "url": "https://www.bbc.com/news/live/cly5rm5d7pxt",
        "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png",
        "publishedAt": "2025-02-06T12:33:45Z",
        "content": "Luke MintzWorld at One reporter\r\nThe UK may be entering a period of economic \"stagflation\", according to a former Bank of England rate-setter.\r\nJonathan Haskel, who was on the Bank's Monetary Policy … [+839 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Mike Butcher",
        "title": "Could this startup’s compact nuclear reactors revolutionize cancer detection? - TechCrunch",
        "description": "As cancer rates in the West, and globally, tack upwards due to lifestyle and environmental pollution, so does the need for the nuclear isotopes used in",
        "url": "https://techcrunch.com/2025/02/06/could-this-startups-compact-nuclear-reactors-revolutionize-cancer-detection/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/Astral-reactor-initial.jpeg?w=750",
        "publishedAt": "2025-02-06T12:05:52Z",
        "content": "As cancer rates in the West, and globally, tack upwards due to lifestyle and environmental pollution, so does the need for the nuclear isotopes used in detecting those cancers in a medical setting. B… [+2626 chars]"
      },
      {
        "source": {
          "id": "abc-news",
          "name": "ABC News"
        },
        "author": "ABC News",
        "title": "Icy storm slams Northeast during morning commute - ABC News",
        "description": null,
        "url": "https://abcnews.go.com/US/icy-mix-hit-22-states-midwest-northeast-latest/story?id\\\\u003d118479446",
        "urlToImage": null,
        "publishedAt": "2025-02-06T11:43:04Z",
        "content": null
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "Jonel Aleccia",
        "title": "Second type of bird flu detected in US dairy cows - The Associated Press",
        "description": "Dairy cattle in Nevada have been infected with a new type of bird flu that's different from the version that has spread in herds since last year. U.S. Agriculture Department officials announced the finding Wednesday. It indicates that distinct strains of the …",
        "url": "https://apnews.com/article/bird-flu-dairy-cattle-h5n1-bed7ead49d34d6a949c670fb3355fea6",
        "urlToImage": "https://dims.apnews.com/dims4/default/c73f499/2147483647/strip/true/crop/3974x2235+0+207/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff0%2F20%2F059ca11d10eb0f14e21ea528d0c3%2Ffb96f7f3901e48018753d2aabb4d203d",
        "publishedAt": "2025-02-06T10:19:00Z",
        "content": "Dairy cattle in Nevada have been infected with a new type of bird flu thats different from the version that has spread in U.S. herds since last year, Agriculture Department officials said Wednesday. … [+2717 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Rolling Stone"
        },
        "author": "Emily Zemler",
        "title": "Kanye West Defends Wife Bianca Censori Amid ‘Invisible Dress’ Controversy - Rolling Stone",
        "description": "Kanye West responded to the controversy around Bianca Censori's naked Grammys dress on social media.",
        "url": "http://www.rollingstone.com/music/music-news/kanye-west-bianca-censori-invisible-dress-controversy-defense-1235258334/",
        "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2025/02/GettyImages-2197428565-1.jpg?w=1600&h=900&crop=1",
        "publishedAt": "2025-02-06T08:26:19Z",
        "content": "Kanye West has spoken up about the extremely naked dress worn by his wife, Bianca Censori, on the Grammys red carpet. West and Censori debuted the NSFW dress in the midst of the awards show arrivals,… [+2813 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Notebookcheck.net"
        },
        "author": "Habeeb Onawole",
        "title": "Asus Zenfone 12 Ultra arrives with a design refresh and powerful internals but disappointing software support - Notebookcheck.net",
        "description": "The Asus Zenfone 12 Ultra arrives with a moderate design makeover, cool colors, and internals worthy of a flagship. It also has AI features which work on-device but disappoints with its software support.",
        "url": "https://www.notebookcheck.net/Asus-Zenfone-12-Ultra-arrives-with-a-design-refresh-and-powerful-internals-but-disappointing-software-support.957002.0.html",
        "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/Asus-Zenfone-12-Ultra-featured.jpg",
        "publishedAt": "2025-02-06T06:38:19Z",
        "content": "Asus has two smartphone lines  the ROG gaming line and the Zenfone series. It already announced new models for the former last November when it unveiled the ROG Phone 9 and ROG Phone 9 Pro. Now it's … [+2415 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CBS Sports"
        },
        "author": "",
        "title": "Brandon Ingram trade grades: Raptors get 'B-' for adding All-Star as Pels bail on pairing with Zion Williamson - CBS Sports",
        "description": "The Raptors land a 27-year-old former All-Star ahead of his free agency",
        "url": "https://www.cbssports.com/nba/news/brandon-ingram-trade-grades-raptors-get-b-for-adding-all-star-as-pels-bail-on-pairing-with-zion-williamson/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2025/02/06/5727283e-e9ac-431b-93d5-67adbd3715a3/thumbnail/1200x675/0e976b4cd4bcbafc8a49b3369ae8fb63/ingram-x-zion.png",
        "publishedAt": "2025-02-06T06:18:55Z",
        "content": "The 2025 NBA trade deadline just won't slow down. Mere hours after the Golden State Warriors landed Jimmy Butler, another former All-Star forward is also on the move. Brandon Ingram, the 27-year-old … [+7927 chars]"
      },
      {
        "source": {
          "id": "axios",
          "name": "Axios"
        },
        "author": "Rebecca Falconer",
        "title": "Trump admin proposes limiting Musk's DOGE access to Treasury data amid privacy lawsuit - Axios",
        "description": "A lawsuit alleges Treasury Secretary Scott Bessent allowed DOGE reps to illegally access sensitive data.",
        "url": "https://www.axios.com/2025/02/06/doge-treasury-payments-system-access-trump-musk",
        "urlToImage": "https://images.axios.com/JDTYxYU8Yg8KKjy1cGzXxP0h5Xo=/0x396:5953x3745/1366x768/2025/02/06/1738816476724.jpg",
        "publishedAt": "2025-02-06T05:15:00Z",
        "content": "Department of Justice lawyers on Wednesday night agreed to temporarily restricting the Elon Musk-headed Department of Government Efficiency's access to sensitive Treasury payment system information.\r… [+1942 chars]"
      }
    ]
    
    
    render() {
        return (
            <div className='container' my-3>
                <h1 className='text-center'> NewsMonkey-Top headlines</h1>
                <Spinner></Spinner>
                {this.state.articles.map((element)=>{console.log(element)})}
                <div className='row'>
                {this.state.articles.map((element)=>{
                    return <div className='col-md-3' key ={element.url}>
                    <NewsItem  title={element.title} description={ element.description} imgurl={element.urlToImage} newsurl={element.url}></NewsItem>
                </div>
                })}
                    
                </div>
                <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page +1 >Math.ceil((this.state.totalResults)/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
