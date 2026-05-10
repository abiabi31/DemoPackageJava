import { useEffect, useMemo, useState } from "react";
import { FiSave } from "react-icons/fi";
import { useAutoTranslation } from "../../hooks/useAutoTranslation";
import Navbar from "../../utils/Navbar/Navbar";
// import GoogleTranslate from "../../utils/GoogleTranslate/GoogleTranslate";
import "./style.css";

const STORAGE_KEY = "dashboard-rows";
const DEFAULT_ROWS = [
  {
    id: 1,
    date: "2026-05-01",
    name: "Team sync",
    completed: false,
    comment: "",
  },
  {
    id: 2,
    date: "2026-05-02",
    name: "Client review",
    completed: true,
    comment: "Reviewed notes",
  },
  {
    id: 3,
    date: "2026-05-03",
    name: "Marketing plan",
    completed: false,
    comment: "Need more data",
  },
  {
    id: 4,
    date: "2026-05-04",
    name: "Design update",
    completed: true,
    comment: "Approved mockups",
  },
  {
    id: 5,
    date: "2026-05-05",
    name: "Release prep",
    completed: false,
    comment: "Waiting on QA",
  },
];

const BibleType = () => {
  const translate = useAutoTranslation();
  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error(error);
      }
    }
    return DEFAULT_ROWS;
  });
  const [savedRowId, setSavedRowId] = useState(null);

  useEffect(() => {
    if (rows.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
    }
  }, [rows]);

  const handleToggleComplete = (id) => {
    setRows((previousRows) =>
      previousRows.map((row) =>
        row.id === id ? { ...row, completed: !row.completed } : row,
      ),
    );
  };

  const handleCommentChange = (id, value) => {
    setRows((previousRows) =>
      previousRows.map((row) =>
        row.id === id ? { ...row, comment: value } : row,
      ),
    );
  };

  const handleSaveComment = (id) => {
    setSavedRowId(id);
    window.setTimeout(() => {
      setSavedRowId(null);
    }, 1400);
  };

  const completedCount = useMemo(
    () => rows.filter((row) => row.completed).length,
    [rows],
  );

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <Navbar />

        <div className="user-panel">
          {/* <div className="user-badge">
            <span>👤</span>
            <div>
              <p>Signed in as</p>
              <strong>{user?.username || "User"}</strong>
            </div>
          </div> */}
          <div className="status-card">
            <p>{translate("Status")}</p>
            <strong>
              {translate("{{completed}}/{{total}} completed", {
                completed: completedCount,
                total: rows.length,
              })}
            </strong>
          </div>
        </div>

        {/* <GoogleTranslate /> */}

        <section className="table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>{translate("Number")}</th>
                <th>{translate("Date")}</th>
                <th>{translate("Name")}</th>
                <th>{translate("Status")}</th>
                <th>{translate("Comment")}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.date}</td>
                  <td>{row.name}</td>
                  <td>
                    <label className="status-switch">
                      <input
                        type="checkbox"
                        checked={row.completed}
                        onChange={() => handleToggleComplete(row.id)}
                      />
                      <span>
                        {row.completed
                          ? translate("Completed")
                          : translate("Pending")}
                      </span>
                    </label>
                  </td>
                  <td>
                    <div className="comment-cell">
                      <input
                        type="text"
                        value={row.comment}
                        onChange={(event) =>
                          handleCommentChange(row.id, event.target.value)
                        }
                        placeholder={translate("Enter comment")}
                      />
                      <div className="comment-actions">
                        <button
                          type="button"
                          className="save-button"
                          onClick={() => handleSaveComment(row.id)}
                        >
                          <FiSave /> {translate("Save")}
                        </button>
                        {savedRowId === row.id && (
                          <span className="saved-badge">
                            {translate("Saved")}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <footer className="dashboard-footer">
          {translate("© 2024 Dashboard Application")}
        </footer>
      </div>
    </div>
  );
};

export default BibleType;
