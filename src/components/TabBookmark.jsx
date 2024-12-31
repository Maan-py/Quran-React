import BookmarkCard from "./BookmarkCard";

const TabBookmark = ({ bookmarkItems }) => {
  return (
    <>
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Bookmark" defaultChecked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        {bookmarkItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {bookmarkItems.map((item, index) => {
              return <BookmarkCard key={item.id} index={index} number={item.verse_key} name_simple={item.name_simple} ayat={item.text_uthmani} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center">
            <p>Belum ada item bookmark</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TabBookmark;
