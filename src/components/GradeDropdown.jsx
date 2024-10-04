function GradeDropdown({id}) {
  return (
    <select as="select" name="grade" className="input w-full" id={id}>
      <option value="">Select Grade</option>
      <option value="nursery">nursery</option>
      <option value="lkg">LKG</option>
      <option value="ukg">UKG</option>
      <option value="1">1st Grade</option>
      <option value="2">2nd Grade</option>
      <option value="3">3rd Grade</option>
      <option value="4">4th Grade</option>
      <option value="5">5th Grade</option>
      <option value="6">6th Grade</option>
      <option value="7">7th Grade</option>
      <option value="8">8th Grade</option>
      <option value="9">9th Grade</option>
      <option value="10">10th Grade</option>
      <option value="11">11th Grade</option>
      <option value="12">12th Grade</option>
    </select>
  );
}

export default GradeDropdown;
