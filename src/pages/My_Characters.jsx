import { useState } from "react";
import Navbar from "../components/Navbar";
import background from "../assets/background.jpg";

const My_Characters = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAdd = () => {
    const newItem = { id: Date.now(), name: "", isEditing: true };
    setItems([...items, newItem]);
  };

  const handleNameChange = (id, newName) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, name: newName } : item
    ));
  };

  const handleEditToggle = (id, isEditing) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, isEditing } : item
    ));
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none z-[-10]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      <div className="relative z-10">
        <Navbar />

        <div style={{ marginTop: "88px", marginLeft: "0.8cm" }}>
          <button className="add-button" onClick={handleAdd}>
            Add+
          </button>
        </div>

        <div style={{ marginTop: "-48px", marginLeft: "10cm", position: "relative" }}>
          <input
            type="text"
            placeholder="Search by..."
            style={{ color: "#cbcbcb" }}
            className="w-160 px-4 py-2 rounded border border-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchQuery && (
            <div className="bg-gray-400 text-black rounded shadow mt-1 max-h-40 overflow-auto w-80 absolute top-full left-0 z-20">
              {items
                .filter(item =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map(item => (
                <div
                  key={item.id}
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setSearchQuery(item.name)}
                >
                  {item.name}
                </div>
              ))}

              {items.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
              ).length === 0 && (
                <div className="px-2 py-1 bg-gray-400 text-gray-800 italic">No matches</div>
              )}
            </div>
          )}
        </div>

        <div style={{ marginTop: "20px", marginLeft: "10.43cm", maxWidth: "400px" }}>
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div
                key={item.id}
                className="bg-gray-400 text-black p-2 rounded shadow mb-2 w-full flex items-center"
              >
                {item.isEditing ? (
                  <input
                    type="text"
                    value={item.name}
                    autoFocus
                    onChange={e => handleNameChange(item.id, e.target.value)}
                    onBlur={() => handleEditToggle(item.id, false)}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        handleEditToggle(item.id, false);
                      }
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                  />
                ) : (
                  <span
                    onDoubleClick={() => handleEditToggle(item.id, true)}
                    className="w-full cursor-text"
                  >
                    {item.name || <i>Empty, double click to edit</i>}
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400 mt-2">No characters</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default My_Characters;
