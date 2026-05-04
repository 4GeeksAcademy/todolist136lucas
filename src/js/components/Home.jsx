import React, { useState } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	return (
		<div className="container mt-5">
			<h1 className="text-center text-danger opacity-25 display-1">todos</h1>
			
			<div className="card shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
				<ul className="list-group list-group-flush">
					{}
					<li className="list-group-item">
						<input
							type="text"
							className="form-control border-0 fs-4"
							placeholder="¿Qué hay que hacer?"
							value={tarea}
							onChange={(e) => setTarea(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter" && tarea.trim() !== "") {
									setListaTareas([...listaTareas, tarea]);
									setTarea("");
								}
							}}
						/>
					</li>

					{}
					{listaTareas.length === 0 ? (
						<li className="list-group-item text-muted small">
							No hay tareas, añadir tareas
						</li>
					) : (
						listaTareas.map((item, index) => (
							<li key={index} className="list-group-item d-flex justify-content-between align-items-center task-item">
								<span className="fs-5">{item}</span>
								<button
									className="btn btn-outline-danger border-0 delete-icon"
									onClick={() =>
										setListaTareas(listaTareas.filter((_, i) => i !== index))
									}
								>
									<i className="fas fa-times"></i>
								</button>
							</li>
						))
					)}
				</ul>
				<div className="card-footer text-muted small">
					{listaTareas.length} items left
				</div>
			</div>
		</div>
	);
};

export default Home;