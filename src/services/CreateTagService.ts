import { getCustomRepository, Timestamp } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {

    async execute(name) {
        const tagsRepository = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Name is necessary");
        }

        const tagAlreadyExists = await tagsRepository.findOne({
            name
        });

        if (tagAlreadyExists) {
            throw new Error("Tag already exists");
        }

        const tag = await tagsRepository.create({
            name
        })

        await tagsRepository.save(tag);

        return tag;
    }
}

export { CreateTagService };