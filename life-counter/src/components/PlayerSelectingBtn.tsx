interface Props {
  btnText: number | string;
  handleClicks: () => void;
}

export function PlayerSelectingBtn({ btnText, handleClicks }: Props) {
  return (
    <>
      <button
        onClick={handleClicks}
        className="playerSelectingBtn"
        style={{
          backgroundColor: btnText === "Close" ? "lightcoral" : "aliceblue",
        }}
      >
        {btnText}
      </button>
    </>
  );
}
