import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Label } from "reactstrap";

const Home = ({ user, isAuthenticated }) => {
  const history = useHistory();

  const checkAuthentication = () => {
    if (!isAuthenticated) {
      history.replace("/login");
    }
  };

  useEffect(() => {
    checkAuthentication();
  });

  return (
    <Label className="my-5">
      <h3>{`Hello  ${user.firstName} ${user.lastName}`}</h3>
    </Label>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Home);
