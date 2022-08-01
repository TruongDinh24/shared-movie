import { useState } from "react";
import { VideoContext } from "../context/videoContext";
import axios from "axios";

const videoList = [
  {
    createdBy: "sharedmovie@gmail.com",
    title: "Howl's Moving Castle [OST - Theme Song]",
    description: "",
    url: "https://www.youtube.com/watch?v=UwxatzcYf9Q",
    embedId: "UwxatzcYf9Q",
  },
  {
    createdBy: "sharedmovie@gmail.com",
    title: "Howl's Moving Castle Violin & Piano repeat 1 hour music",
    description:
      "Howl's Moving Castle Violin & Piano repeat 1 hour music. Great for study music, reading music, calm music, relaxing music. Please enjoy.\nIf you like the music shared in this channel, please subscribe. \nYou can help support my work by buying me a coffee here: https://ko-fi.com/haughtzone\n\nHowl's Moving Castle - Merry-Go-Round of Life\nPiano: pianomusiclovr \nViolin: Sank Lee",
    url: "https://www.youtube.com/watch?v=0HIU-au6Zfc",
    embedId: "0HIU-au6Zfc",
  },
  {
    createdBy: "sharedmovie@gmail.com",
    title:
      "ジブリピアノミュージック🎶【作業用・癒し・勉強用BGM】ギブリピアノメドレー🌻スーパーマスターピース、天空の城ラピュタ、となりのトトロ、ハウルの動く城",
    description:
      "ジブリピアノミュージック🎶【作業用・癒し・勉強用BGM】ギブリピアノメドレー🌻スーパーマスターピース、天空の城ラピュタ、となりのトトロ、ハウルの動く城\nhttps://youtu.be/lXCCgdqLRRg\n---------------------------------------------------------------------------------------------------\n収録曲目 : \n01. もののけ姫 - Princess Mononoke [Princess Mononoke] \n02. さよならの夏～コクリコ坂から～　「コクリコ坂から」より - Summer of Farewells [From Up On Poppy Hill]\n03. いつも何度でも　「千と千尋の神隠し」より - Always With Me [Spirited Away]\n04. 鳥の人　「風の谷のナウシカ」より - Bird Person [Nausicaä of the Valley of the Wind]\n05. 海のおかあさん\n06. 世界の約束 ( Howl's Moving Castle Promise of The World ) \n07. テルーの唄　「ゲド戦記」より - Song of teru [Tales from Earthsea] \n08. 人生のメリーゴーランド\n09. Arrietty's Song　「借りぐらしのアリエッティ」より - Kari Gurashi No Arrietty [The secret world of Arrietty] \n10. 海の見える街　「魔女の宅急便」より - A Town With An Ocean View [Kiki's Delivery Service] \n11. さんぽ　「となりのトトロ」より Hey Let's Go [My neighbor Totoro]\n12. 崖の上のポニョ　「崖の上のポニョ」より - Ponyo on the cliff [Ponyo]\n13. いのちの名前 「千と千尋の神隠し」より - Inochi no Namae (The Name of Life) [Spirited Away] \n14. 君をのせて\n15. 世界の約束　「ハウルの動く城」より - The Promise of the World [Howl's Moving Castle]\n---------------------------------------------------------------------------------------------------\n「Angel Music」へようこそ^^\n🍀「スタジオジブリ」の美しいアニメーションと美しいサウンドトラックで心を和らげる音楽\n🍀チャンネルを高く評価してチャンネル登録すると、さらに多くの動画を視聴できます。\n►► https://bit.ly/subscribeAngelMusic\n🍀ライブショーが好きで、もっとリラックスできる音楽コンテンツが必要な場合は、それを好きになることを忘れないでください。\nご覧いただきありがとうございます！良い一日を！\n»いいね-共有-コメントすることを忘れないでください\n---------------------------------------------------------------------------------------------------\nTag : spirited away,  relaxing piano music, ghibli ost, ghibli piano,studio ghibi,ghibli piano,relaxing piano music,relaxing studio ghibli,ghibli ost,spirited away,ghibli,animation,always with me,the wind rises,my neighbor totoro,ponyo,princess mononoke,porco rosso,castle in the sky,지브리,ジブリ,リラクゼーションミュージック,德間康佳,宮崎駿,高畑勳,鈴木俊雄,마녀배달부키키,센과치히로의행방불명,cardcaptor sakura ost,이웃집토토로,癒し,超熟睡,睡眠用,作業用,三浦コウ,howl's moving castle,totoro,sleep music,kiki's delivery serive,nausicaa,nausicaa of the valley of the wind\n#Ghibli#DisneyMusic#RelaxingPianoMusic",
    url: "https://www.youtube.com/watch?v=lXCCgdqLRRg",
    embedId: "lXCCgdqLRRg",
  },
];

function getYoutubeVideoIdFromUrl(url) {
  let regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  let match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  }
  return;
}

const VideoProvider = (props) => {
  let [videos, setVideos] = useState(videoList);

  let shareVideo = async (url) => {
    try {
      let videoId = getYoutubeVideoIdFromUrl(url);
      if (!videoId) {
        throw new Error("INVALID_URL");
      }
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDt3KcSe5Y43X8Y6oELuEm2cX9EZIHRnIs&part=snippet`
        )
        .then((response) => {
          let item = response.data.items[0];
          let { title, description } = item.snippet;
          const newVideo = {
            createdBy: "sharedmovie@gmail.com",
            title,
            description,
            url,
            embedId: item.id,
          };

          setVideos([...videos, newVideo]);
          console.log("[...videos, newVideo]", [...videos, newVideo]);
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <VideoContext.Provider value={{ videos, shareVideo }}>
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
