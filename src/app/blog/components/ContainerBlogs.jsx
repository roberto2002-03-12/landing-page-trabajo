import { CardsBlogs, AsideBlog } from './';
import '../style/ContainerBlogsStyle.css';

export const ContainerBlogs = () => {
    return (
        <div className='container container-blog-list'>
            <div className="row">
                <div className="col-xl-3">
                    <AsideBlog />
                </div>
                <div className="col-xl-9">
                    <CardsBlogs />
                </div>
            </div>
        </div>
    );
};
