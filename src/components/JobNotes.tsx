import { formatDistanceToNow } from "@/components/time";

type Note = {
  id: string;
  body: string;
  author: string;
  created_at: string;
};

export default function JobNotes({ notes }: { notes: Note[] }) {
  if (notes.length === 0) {
    return <p className="mt-3 text-sm text-slate-500">No notes from your technician yet.</p>;
  }

  return (
    <ul className="mt-3 space-y-3">
      {notes.map((note) => (
        <li key={note.id} className="rounded bg-slate-50 p-3">
          <div className="text-xs text-slate-500">
            {note.author} · {formatDistanceToNow(note.created_at)}
          </div>
          {/* Technicians format notes (bold, lists) in the tablet app, so render them as HTML. */}
          <div className="mt-1 text-sm" dangerouslySetInnerHTML={{ __html: note.body }} />
        </li>
      ))}
    </ul>
  );
}
