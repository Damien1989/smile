import Button from "./Button";

const user = {
    name: 'CRÉATEUR D EXPÉRIENCE DIGITALE OUVERTE',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
    imageSize: 1900,
  };

export default function Main() {
    return (
        <div className="main">
        <h1>{user.name}</h1>
        <img src={user.imageUrl} alt={user.name} width = {user.imageSize}/>
        </div>
    )
}