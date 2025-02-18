import HomePage from "../page";

const LoginPage = ({ currentChild }: { currentChild: boolean }) => {
	return <HomePage currentChild={currentChild} />;
};

export default LoginPage;
