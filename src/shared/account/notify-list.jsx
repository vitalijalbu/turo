import React from "react";
import notifications from "@/data/account.notifications.json"
import EmptyState from "@/shared/components/empty-state";

const NotifyList = () => {


		return (
              // Use parentheses to wrap the conditional rendering
    // and className instead of class for setting CSS classes
    <div>
    {Array.isArray(notifications) ? (
        <ul className="list-group list-group-flush notify-list">
        {notifications.map((notify, i) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
            <div className="flex-shrink-0">
              <div className="icon">icon</div>
            </div>
            <div className="flex-grow-1 ms-3">
              {notify.title}
            </div>
          </li>
        ))}
      </ul>
    ) : (
      // Wrap the text in a React component
      <EmptyState title="Nessuna notifica"/>
    )}
  </div>
		)
	  }
	  
export default NotifyList;