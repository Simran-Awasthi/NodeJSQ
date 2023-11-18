import Avatar from "./Avtar";
const Card = ({ username, text, handle, verified }) => {
  return (
    <div className="flex justify-start items-start gap-2">
      <Avatar text={username[0].toUpperCase()} />
      <div className="flex flex-col">
        <div className="flex gap-2">
          <span className="font-bold">{username}</span>
          {verified && <span>✅</span>}
          <span className="text-gray-400">@{handle}</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
