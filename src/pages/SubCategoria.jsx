import { useParams } from "react-router-dom";
import ListPosts from "../components/ListPosts";

const SubCategoria = () => {
	const { subcategoria } = useParams();
	return (
		<ListPosts
			url={`https://api-rest-beryl.vercel.app/posts?subcategoria=${subcategoria}`}
		/>
	);
};

export default SubCategoria;
