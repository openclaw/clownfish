export function inferResultRunIdentity(filePath) {
  const value = String(filePath ?? "");
  const matrix = value.match(/projectclownfish(?:-worker)?-(\d+)-(\d+)-(\d+)(?:\/|$)/);
  if (matrix) {
    return {
      run_id: `${matrix[1]}-${matrix[2]}-${matrix[3]}`,
      workflow_run_id: matrix[1],
      run_attempt: matrix[2],
      matrix_index: matrix[3],
    };
  }

  const single = value.match(/projectclownfish(?:-worker)?-(\d+)-(\d+)(?:\/|$)/);
  if (single) {
    return {
      run_id: single[1],
      workflow_run_id: single[1],
      run_attempt: single[2],
      matrix_index: null,
    };
  }

  return null;
}
