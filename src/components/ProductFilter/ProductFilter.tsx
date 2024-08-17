import React, {useEffect, useState} from 'react';
import {
  Container,
  FilterButton,
  FilterIcon,
  FilterItem,
  FilterModal,
  FilterTitle,
  ModalBackdrop,
  ModalContainer,
} from './ProductFilter.styles.ts';
import type {ProductFilterProps} from './ProductFilter.types.ts';

const filterTypes = [
  {name: 'Default', sortBy: '', order: ''},
  {name: 'Price: Low to High', sortBy: 'price', order: 'asc'},
  {name: 'Price: High to Low', sortBy: 'price', order: 'desc'},
  {name: 'Rating: Low to High', sortBy: 'rating', order: 'asc'},
  {name: 'Rating: High to Low', sortBy: 'rating', order: 'desc'},
];

const ProductFilter = ({onSortChange}: ProductFilterProps) => {
  const [selected, setSelected] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    onSortChange({sortBy: filterTypes[selected].sortBy, order: filterTypes[selected].order});
  }, [selected, onSortChange]);

  return (
    <Container>
      <FilterButton onPress={() => setVisible(prev => !prev)}>
        <FilterIcon name={'filter'} />
      </FilterButton>

      <FilterModal visible={visible}>
        <ModalBackdrop onPress={() => setVisible(prev => !prev)}>
          <ModalContainer>
            <FilterTitle>Sort by</FilterTitle>

            {filterTypes.map(({name}, index) => (
              <FilterItem
                key={name}
                selected={index === selected}
                onPress={() => setSelected(index)}>
                {name}
              </FilterItem>
            ))}
          </ModalContainer>
        </ModalBackdrop>
      </FilterModal>
    </Container>
  );
};

export default ProductFilter;
