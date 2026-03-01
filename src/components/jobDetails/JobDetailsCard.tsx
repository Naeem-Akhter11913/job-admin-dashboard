import * as React from "react";
import {
    Box,
    Typography,
    IconButton,
    TextField,
    Select,
    MenuItem,
    Chip,
    Collapse,
    Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import LinkIcon from "@mui/icons-material/Link";

const JobDetailsCard: React.FC = () => {
    const [open, setOpen] = React.useState(true);
    const [jobTitle, setJobTitle] = React.useState("");
    const [jobType, setJobType] = React.useState("full-time");
    const [description, setDescription] = React.useState("");
    const [tags, setTags] = React.useState([
        "React.js",
        "JavaScript",
        "Node.js",
        "Redux",
    ]);
    const [tagInput, setTagInput] = React.useState("");

    const addTag = (value: string) => {
        const v = value.trim();
        if (!v || tags.includes(v)) return;
        setTags((prev) => [...prev, v]);
        setTagInput("");
    };

    const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addTag(tagInput);
        }
    };

    const removeTag = (tag: string) => {
        setTags((prev) => prev.filter((t) => t !== tag));
    };

    return (
        <>
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    py: 1.5,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        <KeyboardArrowDownIcon
                            sx={{
                                transform: open ? "rotate(0deg)" : "rotate(-90deg)",
                                transition: "0.2s",
                            }}
                        />
                    </IconButton>
                    <Typography fontWeight={600}>Job Details</Typography>
                </Box>

                <IconButton size="small">
                    <MoreHorizIcon fontSize="small" />
                </IconButton>
            </Box>

            <Collapse in={open}>
                <Grid container spacing={2} px={2} pb={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box mb={2}>
                            <Typography fontSize={13} fontWeight={500} textAlign={'start'}>
                                Job Title
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Enter job title"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </Box>

                        <Box>
                            <Typography fontSize={13} fontWeight={500} textAlign={'start'}>
                                Job Description
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 0.5,
                                    border: "1px solid #E5E7EB",
                                    borderBottom: "none",
                                    borderRadius: "8px 8px 0 0",
                                    p: 0.5,
                                    backgroundColor: "#F9FAFB",
                                }}
                            >
                                <IconButton size="small"><FormatBoldIcon fontSize="small" /></IconButton>
                                <IconButton size="small"><FormatItalicIcon fontSize="small" /></IconButton>
                                <IconButton size="small"><FormatListBulletedIcon fontSize="small" /></IconButton>
                                <IconButton size="small"><FormatListNumberedIcon fontSize="small" /></IconButton>
                                <IconButton size="small"><LinkIcon fontSize="small" /></IconButton>
                            </Box>

                            <TextField
                                fullWidth
                                multiline
                                minRows={2}
                                placeholder="Enter job description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "0 0 8px 8px",
                                    },
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* RIGHT */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box mb={2}>
                            <Typography fontSize={13} fontWeight={500} textAlign={'start'}>
                                Job Type
                            </Typography>
                            <Select
                                fullWidth
                                size="small"
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                                style={{textAlign:'start'}}
                            >
                                <MenuItem value="full-time">Full Time</MenuItem>
                                <MenuItem value="part-time">Part Time</MenuItem>
                                <MenuItem value="contract">Contract</MenuItem>
                                <MenuItem value="internship">Internship</MenuItem>
                            </Select>
                        </Box>



                        <Box>
                            <Typography fontSize={13} fontWeight={500} textAlign={'start'}>
                                Add Tags
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Type and press Enter"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagKeyDown}
                            />
                        </Box>
                        <Box mt={2}>
                            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                {tags.map((tag) => (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        size="small"
                                        onDelete={() => removeTag(tag)}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Collapse>
        </>
    );
};

export default JobDetailsCard;