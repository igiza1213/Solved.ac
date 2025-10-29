function merge<T>(left: T[], right: T[]): T[] {
  const sortedArr: T[] = [];
  while (left.length && right.length) {
    //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift()!);
    } else {
      sortedArr.push(right.shift()!);
    }
  }
  //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
  //비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
  return [...sortedArr, ...left, ...right];
}

export function mergeSort<T>(arr: T[]): T[] {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  //slice로 해주기 때문에 원본 arr은 손상 없다.
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
  //차근차근 merge(정렬해서 합치기)해주면 된다.
  return merge(mergeSort(left), mergeSort(right));
}
