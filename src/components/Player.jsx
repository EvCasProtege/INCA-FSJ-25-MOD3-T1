
function Player() {
  return (
    <div className="player flex flex-col items-center p-4 bg-gray-800 text-white">
      <div className="controls flex space-x-4">
        <button className="bg-blue-500 p-2 rounded">Play</button>
        <button className="bg-blue-500 p-2 rounded">Pause</button>
        <button className="bg-blue-500 p-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default Player;
