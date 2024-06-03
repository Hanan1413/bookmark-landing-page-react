import BookmarkCard from "../bookmark/BookmarkCard";
import styles from "./BookMark.module.css";
import image from "../../images/illustration-hero.svg";

function BookMarkManger() {
  return (
    <>
      <div className={`${styles.mangerContainer} container `}>
        <div className={styles.card}>
          <BookmarkCard
            title="A simple Bookmark Manager"
            description=" Organize your bookmarks however you like. Our simple drag-and-drop
        interface gives you complete control over how you manage your favourite
        sites."
            fontSize={styles.fontSize}
          />
        </div>
        <div className={styles.heroImage}>
          {/* <img src={image} alt={image} className={styles.bookImage} /> */}
          <div className={styles.bg}></div>

        </div>
      </div>
    </>
  );
}

export default BookMarkManger;
