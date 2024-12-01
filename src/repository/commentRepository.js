 import CrudRepository from "./crudRepository.js";
import Comment from "../models/commnet.model.js";

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }

    // this repository give us create, get, getAll, update and delete comment functionality
    // other than those we have to create in the repository

}
export default CommentRepository;