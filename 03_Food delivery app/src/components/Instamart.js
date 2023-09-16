import { useState } from "react";

const Section = ({ isVisible, title, decription, SetisVisible }) => {
  return (
    <div className="border-2 border-black p-2 m-2">
      <h3>{title}</h3>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            SetisVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            SetisVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{decription}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, SetVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">InstaMart</h1>
      <Section
        title={"About InstaMart"}
        decription={
          "This is the about section of Instamartnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
        }
        isVisible={visibleSection == "about"}
        SetisVisible={() => SetVisibleSection("about")}
      />
      <Section
        title={"Team InstaMart"}
        decription={
          "This is the team InstamartLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={visibleSection === "Team"}
        SetisVisible={() => SetVisibleSection("Team")}
      />
      <Section
        title={"Career"}
        decription={
          "This is the team InstamartLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={visibleSection === "Career"}
        SetisVisible={() => SetVisibleSection("Career")}
      />
      {/* <AboutInstaMart />
      <DetailsoFInstaMart />
      <Product />
      <Carrers /> */}
    </div>
  );
};

export default Instamart;
