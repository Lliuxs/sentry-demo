import { useParams } from 'react-router-dom';

const User = () => {
  // const history = useHistory();
  const params = useParams();
  return <div>id: {params?.id}</div>;
};

export default User;
