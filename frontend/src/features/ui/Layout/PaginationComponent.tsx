import { Pagination } from 'flowbite-react';
import { PAGESIZE } from '../../products/ProductsList';

interface Props {
  totalCount: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export function PaginationComponent({ totalCount, onPageChange, currentPage }: Props) {

  return (
    <div className="flex justify-center my-4">
      <Pagination
        currentPage={currentPage}
        onPageChange={page => onPageChange(page)}
        showIcons
        totalPages={Math.ceil(totalCount / PAGESIZE)}
      />

    </div>
  );
}


