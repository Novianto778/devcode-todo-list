import { useEffect, useState } from "react";
import { useActivities } from "../../context/activities-context";
import EmptyStateImg from "../../assets/image/activity-empty-state.svg";
import ActivityItem from "./ActivityItem";
import ActivityBar from "./ActivityBar";
import DeleteModal from "../modal/DeleteModal";
import SuccessModal from "../modal/SuccessModal";

const Activity = () => {
  const [showModal, setShowModal] = useState(false);
  const [cardItemIndex, setCardItemIndex] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const { activities, getActivities, addActivity, loading, deleteActivity } =
    useActivities();
  useEffect(() => {
    getActivities();
    return () => {
      getActivities();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteItem = (id) => {
    deleteActivity(id);
    handleCloseModal();
    setShowAlert(true);
  };

  return (
    <>
      {showAlert && <SuccessModal setShowAlert={setShowAlert} />}
      {showModal && (
        <DeleteModal
          item={activities[cardItemIndex]}
          onCloseModal={handleCloseModal}
          onDeleteItem={handleDeleteItem}
        />
      )}

      <ActivityBar />
      {loading ? (
        <p className="container">Loading....</p>
      ) : activities?.length > 0 ? (
        <ActivityItem
          activities={activities}
          onOpenModal={handleOpenModal}
          setCardItemIndex={setCardItemIndex}
        />
      ) : (
        <EmptyState addActivity={addActivity} />
      )}
    </>
  );
};

export default Activity;

const EmptyState = ({ addActivity }) => (
  <div className="empty-item container" data-cy="activity-empty-state">
    <img
      onClick={addActivity}
      className="empty-state"
      src={EmptyStateImg}
      alt="empty state activity"
    />
  </div>
);
