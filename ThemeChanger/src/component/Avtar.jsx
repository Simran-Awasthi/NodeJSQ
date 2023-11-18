const Avatar = ({ text }) => {
  return (
    <div className="h-10 w-10 rounded-full bg-red-600 flex justify-center items-center">
      {text}
    </div>
  );
};

export default Avatar;
