import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Filter } from "../../reuseable-components/filters/FilterTree";
import {
  updateExpandedFilters,
  updateSelectedFilters,
} from "../../reuseable-components/filters/filter-utils";
import { Size } from "../../constants/consts";

const monstersMockFilters: Filter[] = [
  {
    key: "Monster Type",
    type: "MonsterType",
    children: [
      {
        key: "Beast",
        type: "MonsterCategory",
        children: [
          {
            key: "Mammal",
            type: "MonsterSubcategory",
            children: [
              {
                key: "Wolves",
                type: "Monster",
              },
              {
                key: "Bears",
                type: "Monster",
              },
            ],
          },
          {
            key: "Avian",
            type: "MonsterSubcategory",
          },
        ],
      },
      {
        key: "Elemental",
        type: "MonsterCategory",
        children: [
          {
            key: "Air",
            type: "MonsterSubcategory",
          },
          {
            key: "Fire",
            type: "MonsterSubcategory",
          },
          {
            key: "Water",
            type: "MonsterSubcategory",
          },
          {
            key: "Earth",
            type: "MonsterSubcategory",
          },
        ],
      },
      {
        key: "Fey",
        type: "MonsterCategory",
        children: [
          {
            key: "Humanoid",
            type: "MonsterSubcategory",
            children: [
              {
                key: "Hags",
                type: "Monster",
              },
              {
                key: "Dryad",
                type: "Monster",
              },
            ],
          },
          {
            key: "Animal",
            type: "MonsterSubcategory",
          },
        ],
      },
    ],
  },
  {
    key: "Size",
    type: "SizeCategory",
    children: [
      {
        key: Size[Size.small],
        type: "Size",
      },
      {
        key: Size[Size.medium],
        type: "Size",
      },
      {
        key: Size[Size.large],
        type: "Size",
      },
      {
        key: Size[Size.huge],
        type: "Size",
      },
    ],
  },
];

interface FiltersState {
  filters: Filter[];
  reset: () => void;
  updateSelectedFilters: (index: number, parentIndex: number[]) => void;
  updateExpandedFilters: (index: number, indexPath: number[]) => void;
}
export const useMonstersFilterStore = create<FiltersState>()(
  immer((set) => ({
    filters: monstersMockFilters,
    updateSelectedFilters: (index, parentIndexPath) =>
      set((state) => {
        updateSelectedFilters(state.filters, index, parentIndexPath);
      }),
    updateExpandedFilters: (index, parentIndexPath) =>
      set((state) => {
        updateExpandedFilters(state.filters, index, parentIndexPath);
      }),
    reset: () => set({ filters: monstersMockFilters }),
  }))
);
