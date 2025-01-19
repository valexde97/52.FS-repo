import reactImg from "../assets/image0.jpeg";

function ProfileCard({ avatar, name, occupation, hobbies }) {
  return (
    <>
      <header
        style={{
          backgroundColor: "#3e93b4",
          color: "white",
          width: "100%",
          padding: "5px 10px",
          textAlign: "center",
          margin: "20px ",
        }}
      >
        <h1>{name}</h1>
      </header>

      <img src={avatar} width={250} alt="react-Img" />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Occupation⚡: {occupation}</h2>
      </main>
      <footer
        style={{
          backgroundColor: "#164d7d",
          color: "white",
          padding: "10px 20px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h2>
         Hobbies💕: {hobbies}
        </h2>
      </footer>
    </>
  );
}

export default ProfileCard;
