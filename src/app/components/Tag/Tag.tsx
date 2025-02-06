import { TagEntry } from '../../../data/tag';
import './Tag.scss';

interface TagProps {
    tag: TagEntry;
}

function Tag({ tag }: TagProps) {
    if(!tag) return <div>No tag</div>;

    return <span className="container-component-tag">{tag}</span>
    
}

export default Tag