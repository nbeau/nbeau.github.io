import useBreadcrumbs from 'use-react-router-breadcrumbs';
import "../styles/Breadcrumbs.css";
import { Link } from 'react-router-dom';

const routes = [
    { path: '/', breadcrumb: 'home' },
    { path: '/training', breadcrumb: 'training' },
    { path: '/dieting', breadcrumb: 'dieting' },
    { path: '/analysis', breadcrumb: 'analysis' },
    { path: '/training/strength', breadcrumb: 'strength' },
    { path: '/training/hypertrophy', breadcrumb: 'hypertrophy' },
    { path: '/training/endurance', breadcrumb: 'endurance' },
    { path: '/dieting/bulking', breadcrumb: 'bulking' },
    { path: '/dieting/cutting', breadcrumb: 'cutting' },
    { path: '/dieting/maintaining', breadcrumb: 'maintaining' },

];

function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs();

    return (
        <h6 className="breadcrumbs_h6" >
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <Link key={match.pathname} to={match.pathname}>
                    <span> &gt; </span>
                    {breadcrumb}
                </Link>
            ))}
        </h6>
    );
}

export default Breadcrumbs;