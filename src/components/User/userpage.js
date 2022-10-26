import Post from '../Post';
import UserUpload from './userUpload';
import MyNFT from '../../views/Cart'; // 這頁跟Cart會內容一樣

export default function userpage(props) {
    const o = [{'id':1,'name':'1','img': "/on/1.jpg"},{'id':2,'name':'2','img': "/on/2.jpg"},{'id':3,'name':'3','img': "/on/3.jpg"}];
    const w = [];
    
    const { userpage } = props;

    const nowPage  = () => {
            switch(userpage) {
              case "on":
                return <UserUpload item={o} page='上架中' />;
              case "wait":
                return <UserUpload item={w} page='待上架' />;
              case "myNFT":
                return <MyNFT />;
              default:
                return <Post />
    }}
    return (
        <div>{nowPage()}</div>
    )
}