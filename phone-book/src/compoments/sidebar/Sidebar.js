import { RiContactsBookFill } from "react-icons/ri";
const Sidebar = () => {
  return (
    <>
      <aside
        class="
        d-flex align-items-center d-flex justify-content-center"
        style={{
          height: "100%",
          backgroundColor: "#000",
        }}
      >
        <div
          style={{
            fontSize: "7vw",
            color: "#fff",
            textOrientation: "mixed",
            writingMode: "vertical-lr",
            fontWeight: "700",
            margin: "0",
            padding: "0",
          }}
        >
          <RiContactsBookFill style={{ margin: "2vw 4vw 2vw 0" }} />
          Phone-book
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
